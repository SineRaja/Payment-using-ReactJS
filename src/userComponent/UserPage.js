import './userPage.css'
import { useAuthValue } from '../AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import firebase from 'firebase/compat/app';


function Profile() {
    const { currentUser } = useAuthValue();
    // const {user, setUser} = useState("");
    // const [userd, setUserd] = useState([]);
    // const [info, setInfo] = useState([]);r\

    // Start the fetch operation as soon as
    // the page loads
    // window.addEventListener('load', () => {
    //     Fetchdata();
    // });

    // // Fetch the required data using the get() method
    // const Fetchdata = () => {
    //     db.collection('data').get().then((querySnapshot) => {

    //         // Loop through the data and store
    //         // it in array to display
    //         querySnapshot.forEach(element => {
    //             var data = element.data();
    //             setInfo(arr => [...arr, data]);

    //         });
    //     })
    // }
    
    // firebase.database().ref("data").on("value", snapshot => {
    //     let userData= [];
    //     snapshot.forEach(snap => {
    //         userData.push(snap.val());
    //     });
    //     setInfo(arr => [...arr,userData]);
    // });

    // useEffect(() => {
        
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
    //                 setUserd([]);
    //                 const data = snapshot.val();
    //                 if (data !== null) {
    //                     Object.values(data).map((datas) => (
    //                         setUserd((oldArray) => [...oldArray, datas])
    //                     ))
    //                 }
    //             });
    //         }
    //     });
        
    // }, []);

    console.log(auth.currentUser.uid)

    // const writeUserData = () => {
    //     const uidd = uid();
    //     set(ref(db, `/${auth.currentUser.uid}/${uidd}`),{
    //         user:user,
    //         uidd: uidd
    //     });
    //     setUser("");

    // }

    // const [blogs,setBlogs]=useState([])

    // const fetchBlogs=async()=>{
    //     const response=db.collection('data');
    //     const data=await response.get();
    //     data.docs.forEach(item=>{
    //      setBlogs([...blogs,item.data()])
    //     })
    // }

    // useEffect(() => {
    //     console.log(blogs);
    //     fetchBlogs();
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [])

    
    return (
        <div className='center'>
            <div className='profile'>
                <h1>Profile</h1>
                <p><strong>Email: </strong>{currentUser?.email}</p>
                <p>
                    <strong>Email verified: </strong>
                    {`${currentUser?.emailVerified}`}
                </p>

                {/* <p>User : {blogs.electricbill}</p>
                {
                    info.map((data) => (
                        <Frame course={data.gas}
                        //    name={data.Nane}
                        //    age={data.Age}
                        />
                    ))
                }

                {
                    info.map(data => {
                        return(
                            <p>{data.gas}</p>
                        )
                    })
                } */}
                <span onClick={() => signOut(auth)}>Sign Out</span>
            </div>
        </div>
    )
}

// Define how each display entry will be structured
// const Frame = ({ course }) => {
//     console.log("1234")
//     console.log(course);
//     return (
//         <center>
//             <div className="div">
//                 <p>Course : {course}</p>
//             </div>
//         </center>
//     );
// }


export default Profile
