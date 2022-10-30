
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {

  const data = [
    { name: "James Brown", age: 28, id: 'one' },
    { name: "John Doe", age: 67 , id: 'two'},
    { name: "Peter Parker", age: 45, id: 'three' },
    { name: "Ryan Gray", age: 34 , id: 'four'},
    { name: "Zediel Nielson", age: 52, id: 'five'},
  ]

  const onDragEnd = (result) => {
    console.log(result)
  }

  return (
    <div>
      <DragDropContext onDragEnd={ onDragEnd }>
        <Droppable droppableId='droppableArea'>
          { (provided) => (

            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef} >

              { data.map((person, index) => (
                <Draggable 
                  draggableId={ person.id.toString() }
                  key={ person.id }
                  index={index}
                  >
                  {(provided) => (
                    <div 
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      
                    >
                      { person.name }
                    </div>
                  )}
                </Draggable>

              ))

              }
              { provided.placeholder }
            </div>
            
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
