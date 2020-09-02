export default {
    name: "home",
    data: function() {
        return {
            dialog: false,
            currentExpenses: {
                value: 40,
                text: "40 %",
                total: 19487
            },
            tab: "today",
            todayExpenses: [
                {
                    category: "Bills",
                    expenseName: "Mobile Recharge",
                    amount: "299",
                    date: "2nd September @05:02 PM"
                },
                {
                    category: "Bills",
                    expenseName: "Brodband Bill",
                    amount: "1024",
                    date: "2nd September @12:02 AM"
                },
                {
                    category: "Bills",
                    expenseName: "Petrol",
                    amount: "200",
                    date: "2nd September @08:02 AM"
                },
                {
                    category: "Bills",
                    expenseName: "Electricity",
                    amount: "500",
                    date: "1st September @04:32 PM"
                },
                {
                    category: "Home",
                    expenseName: "Travel",
                    amount: "5000",
                    date: "1st September @01:32 PM"
                },
            ]
        }
    },
    created() {

    },
    methods: {

    }
}