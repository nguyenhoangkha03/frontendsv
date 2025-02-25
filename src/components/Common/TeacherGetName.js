import { useState, useEffect } from "react"
import { getTeacherById } from "../../service/teacherService"

function Cell({ Id }) {
  const [name, setName] = useState("Loading...")

  useEffect(() => {
    async function fetch() {
      try {
        const object = await getTeacherById(Id)
        setName(object.ho_ten)
      } catch (error) {
        setName("Error loading")
      }
    }
    fetch()
  }, [Id]) 

  return <span>{name}</span>
}

export default Cell