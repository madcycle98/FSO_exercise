import Header from "./Header"

const Course = (props) => {

    
    
    const { course } = props
    const courseParts = course.parts

    const total = courseParts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)
    
    console.log(total)

    return (
      <div>
        <Header course={course} />
        {courseParts.map(single => 
        <div key={single.id}>
            <p>{single.name}
            <span>{single.exercises}</span></p>
        </div>
        )}
        {console.log(course.parts)
        }
        <p>Total amount: {total}</p>
      </div>
    )
  }



  export default Course