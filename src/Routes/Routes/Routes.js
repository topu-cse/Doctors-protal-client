import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Adddoctors from "../../Pages/Dashboard/Adddoctors/Adddoctors";
import Alusers from "../../Pages/Dashboard/AllUsers/Alusers";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DispalyError from "../../Pages/Shared/DisPlayError/DispalyError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact from "../../Pages/Contact/Contact";
import Allbooking from "../../Pages/Dashboard/Allbooking/Allbooking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement:<DispalyError></DispalyError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: 'contactus',
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<DispalyError></DispalyError>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><Alusers></Alusers></AdminRoute>
            },
            {
                path:'/dashboard/allbooking',
                element:<AdminRoute><Allbooking></Allbooking></AdminRoute>
            },
            {
                path:'/dashboard/adddoctors',
                element:<AdminRoute><Adddoctors></Adddoctors></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader:({params})=>fetch(`http://localhost:5000/booking/${params.id}`)
            },
        ]
    }
])

export default router;