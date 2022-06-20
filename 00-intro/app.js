var app = new Vue({
    el: "#app",
    data() {
        return {
            msg:"nos débuts avec VueJS"
        }
    },
    methods: {
        alertMsg() {
            alert(`Voici le message: ${this.msg}`)
        }
    },
})