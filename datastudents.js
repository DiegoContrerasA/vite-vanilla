export const studentsYounger = (edad, data) => {
    return data.filter((student, index) => {
        return student.edad < edad

    })
}

export const getNameStudent = (Name, data) => {
    return data.find((student) => {
        return student.nombre.toLowerCase() == Name.toLowerCase()
    })
}

