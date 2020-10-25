import PropTypes from 'prop-types'

export default {
    email : {
        id : 'email',
        type : PropTypes.string,
    },
    password : {
        id : 'password',
        type : PropTypes.string,
    },
    studentId : {
        id : 'studentId',
        type : PropTypes.string,
    },
    name : {
        id : 'name',
        type : PropTypes.string,
    },
    role : {
        id: 'role',
        type: PropTypes.string,
        default : {
            student : {
                id : 'student',
                value : '학생',
            },
            professor : {
                id : 'professor',
                value : '교수',
            } 
        }
    },
}