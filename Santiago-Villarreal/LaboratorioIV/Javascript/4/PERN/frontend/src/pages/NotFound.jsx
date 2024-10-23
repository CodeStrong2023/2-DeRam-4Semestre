import {Link} from "react-router-dom"
import Card from "../components/ui/card"


function NotFound() {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
        <Card>
            <h1 className="text-4x1 font-bold my-2 text-center">404</h1>
            <h3 className="text-x1 text-center">Pagina no encontrada</h3>
            <Link to='/' className="text-blue-500 hover:underline">Volver al inicio</Link>
        </Card>
    </div>
  )
}

export default NotFound