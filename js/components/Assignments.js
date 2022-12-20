import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },
  template: `
        <section class="space-y-6">
        <AssignmentList :assignments="filters.inProgess" title="In Progress"></AssignmentList>
        <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
        
        <form @submit.prevent="add">
         <div class="border border-gray-600 text-black">
            <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
            <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>  
        </form>
        </section>
        `,
  data() {
    return {
      assignments: [
        { name: "Finish project", completed: false, id: 1 },
        { name: "Read chapter 4", completed: false, id: 2 },
        { name: "Turn in homework", completed: false, id: 3 },
      ],
      newAssignment: "",
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
    add() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1,
      });

        this.newAssignment = "";
    },
  },
};
