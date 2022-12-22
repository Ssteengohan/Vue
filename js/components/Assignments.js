import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate},
  template: `
        <section class="space-y-6">
        <AssignmentList :assignments="filters.inProgess" title="In Progress"></AssignmentList>
        <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
        
        <AssignmentCreate  @add="add"></AssignmentCreate>
        </section>
        `,
  data() {
    return {
      assignments: [],
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
