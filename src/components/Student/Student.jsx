import React from 'react'
import './Student.css'

function Student({ student, deleteStudent }) {

    const handleClick = () => {
        deleteStudent(student.id)
    }

    return (
        <div className='student-data'>
            <div className="student-photo">
                <img src={student.image} />
            </div>
            <div className='student-details'>
                <div >
                    <strong>Name: </strong>{student.firstName} {student.lastName}
                </div>
                <div>
                    <strong>Age: </strong>{student.age}
                </div>
                <div>
                    <strong>Address: </strong>{student.address}
                </div>
                <div>
                    <strong>Student ID: </strong>{student.studentId}
                </div>
                <div>
                    <strong>Favorite Lunch: </strong>{student.favoriteLunch}
                </div>
            </div>
            <button
                className='delete-user-btn'
                onClick={handleClick}
            >Delete User</button>
        </div>
    )
}

export default Student