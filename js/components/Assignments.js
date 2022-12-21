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
      assignments: [
        { name: "Finish project", completed: false, id: 1 },
        { name: "Read chapter 4", completed: false, id: 2 },
        { name: "Turn in homework", completed: false, id: 3 },
      ],
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
