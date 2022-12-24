import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate},
  template: `
        <section class="flex gap-8">
        <AssignmentList :assignments="filters.inProgess" title="In Progress">
        <AssignmentCreate  @add="add"></AssignmentCreate>
        </AssignmentList>
        <div v-show="showCompleted">
        <AssignmentList 
          :assignments="filters.completed" 
          title="Completed" 
          can-toggle
          @toggle="showCompleted = !showCompleted"
          ></AssignmentList>
        
        </div>
        </section>
        `,

  data() {
    return {
      assignments: [],
      showCompleted: true,
    };
  },

  computed: {
    filters() {
      return {
        inProgess: this.assignments.filter(
          (assignment) => !assignment.completed
        ),
        completed: this.assignments.filter(
          (assignment) => assignment.completed
        ),
      };
    },
  },
 
  created() {
      fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(assignments => {
          this.assignments = assignments;
      });
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
