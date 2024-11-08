// eslint-disable-next-line no-unused-vars
localStorage.clear()
const employees =[
  {
    "id": 1,
    "firstName": "Amit",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Generate the quarterly sales report.",
        "taskDate": "2024-10-20",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Follow-up",
        "taskDescription": "Follow up with key clients regarding renewals.",
        "taskDate": "2024-10-15",
        "category": "Client Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the monthly team meeting.",
        "taskDate": "2024-10-25",
        "category": "Team Management"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Product Update",
        "taskDescription": "Update the product documentation.",
        "taskDate": "2024-10-21",
        "category": "Product"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix critical bugs in the mobile app.",
        "taskDate": "2024-10-16",
        "category": "Development"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Design Update",
        "taskDescription": "Revamp the user interface for the homepage.",
        "taskDate": "2024-10-10",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Marketing Strategy",
        "taskDescription": "Prepare a new marketing campaign for Q4.",
        "taskDate": "2024-10-22",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Ad Campaign",
        "taskDescription": "Launch an ad campaign for the new product.",
        "taskDate": "2024-10-12",
        "category": "Advertising"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Kiran",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support Training",
        "taskDescription": "Train the new support staff on the product.",
        "taskDate": "2024-10-23",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Perform a full inventory check.",
        "taskDate": "2024-10-14",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Warehouse Visit",
        "taskDescription": "Inspect the new warehouse facility.",
        "taskDate": "2024-10-24",
        "category": "Logistics"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Security Audit",
        "taskDescription": "Perform a security audit of the systems.",
        "taskDate": "2024-10-09",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Compliance Review",
        "taskDescription": "Ensure the system is compliant with new regulations.",
        "taskDate": "2024-10-26",
        "category": "Compliance"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
]

  
// eslint-disable-next-line no-unused-vars
const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
    }]
  
  export const setLocalStorage = () => {
      localStorage.setItem('employees',JSON.stringify(employees))

      localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
        const employees = JSON.parse (localStorage.getItem('employees'))

        const admin = JSON.parse (localStorage.getItem('admin'))

       return {employees,admin}
  }