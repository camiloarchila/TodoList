import { Text } from "@chakra-ui/react"

export function AboutUs(){
    return (
        <div>
            <Text
            mt={3}
            ml={2}
            textTransform="uppercase"
            fontSize="large"
            fontWeight="bold"
            color="#319795"
          >
            Detalle del Task List
          </Text>
            <Text
            fontSize="short"
            fontStyle="italic"
            >
                Task List es una herramienta para organizar tus tareas, permite crear nuevas tareas, eliminar las que ya no necesitas y checkear tus tareas,
                el formulario para la creacion de las tareas tiene unas validaciones de que el nombre no puede ser demasiado corto y debe tener una,
                tambien almacena las tareas pendientes, o terminadas en memoria para que no las pierdas.
            </Text>
        </div>
    )
}