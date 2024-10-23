import Card from "../components/ui/card"
import Input from "../components/ui/input"
import Button from "../components/ui/Button"
import Label from "../components/ui/label";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link} from "react-router-dom"

function RegisterPage() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = handleSubmit(async(data) =>{
    console.log(data);
    const res = await axios.post("http://localhost:3000/api/singup", data, {
      withCredentials: true,
      });
      console.log(res);
  });
  

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
    <Card>
    <h2 className="text-2xl font-bold">Registro</h2>
    <form onSubmit={onSubmit}>
        <Label htmlFor="name">Nombre</Label>
        <Input placeholder="Ingrese su nombre" {...register("name", {required:true})}></Input>
        {
          errors.name && <p className="text-red-500">Este campo es requerido</p>
        }
        <Label htmlFor="lastName">Apellido</Label>
        <Input placeholder="Ingrese su apellido" {...register("lastName", {required:true})}></Input>
        {
          errors.lastName && <p className="text-red-500">Este campo es requerido</p>
        }
        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Ingrese su email" {...register("email", {required:true})}></Input>
        {
          errors.email && <p className="text-red-500">Este campo es requerido</p>
        }
        <Label htmlFor="password">Contraseña</Label>
        <Input type="password" placeholder="Ingrese su contraseña"{...register("password", {required:true})}></Input>
        {
          errors.password && <p className="text-red-500">Este campo es requerido</p>
        }
        <Button>Registrarse</Button>
      </form>
      <div className="flex justify-between my-4">
          <p>¿Ya tienes cuenta?</p>
          <Link to="/Login">Loguearse</Link>
        </div>
    </Card>
    </div>
  )
}

export default RegisterPage