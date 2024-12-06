import React, {useState} from 'react'
import './StudentList.css'
import Student from '../Student/Student'
import studentsJSON from '../../assets/students.json'

function StudentList() {

    const [students, setStudents] = useState(studentsJSON)

    const createNewStudent = () => {
        const newId = Math.max(...students.map(user => user.id), 0) + 1;

        const newStudent = {
            id: newId,
            name: `Student #${newId}`,
            lastName: "Doe",
            age: Number(`${newId}`) + 30,
            position: `Junior Developer ${newId}`,
            address: `Location ${newId}`,
            studentId: Number(`${newId}`) + 1,
            favoriteLunch: `Raw meat with ${newId} potatoes`,
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
        }

        return newStudent
    }

    const addStudent = () => {
        const newStudent = createNewStudent()

        setStudents([...students, newStudent])
    }

    const deleteStudent = (idForDeletion) => {
        let studentsCopy = [...students].filter(student => student.id !== idForDeletion)

        setStudents(studentsCopy)
    }

    return (
        <div className="studentList-container">
            <h2>Student List</h2>
            {students.map(student => <Student
                key={student.id}
                student={student}
                deleteStudent={deleteStudent} />)}
            <button
                className='add-user-button'
                onClick={addStudent}
            >Add Student </button>
        </div>
    )
}

export default StudentList