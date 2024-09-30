import React from 'react'
import { useParams } from 'react-router-dom';


const data = [
    {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org"
    },
    {
      name: "Aarav",
      username: "aarav_01",
      email: "aarav@accio.com",
      phone: 9876543210,
      website: "aarav.dev"
    },
    {
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: 1-463-123-4447,
      website: "ramiro.info"
    },
    {
      name: "Ishaan",
      username: "ishaan.innovate",
      email: "ishaan@accio.com",
      phone: 9988776655,
      website: "ishaan.tech"
    },
    {
      name: "Sanya",
      username: "sanya123",
      email: "sanya@accio.com",
      phone: 9876512345,
      website: "sanya.create"
    },
    {
      name: "Rohit",
      username: "rohit.pro",
      email: "rohit@accio.com",
      phone: 9123456780,
      website: "rohitdev.com"
    },
    {
      name: "Tanya",
      username: "tanya.tech",
      email: "tanya@accio.com",
      phone: 9345612301,
      website: "tanya.dev"
    },
    {
      name: "Anika",
      username: "anika.coder",
      email: "anika@accio.com",
      phone: 9123467890,
      website: "anika.codes"
    },
    {
      name: "Rahul",
      username: "rahul_creator",
      email: "rahul@accio.com",
      phone: 9988776600,
      website: "rahulcreative.tech"
    },
    {
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Email: Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      website: "ambrose.net"
    }
  ];
  
  

const UserDetail = () => {
    const{id} = useParams()
    const [loading, setLoading] = React.useState(true);

React.useEffect(() => {
  setTimeout(() => setLoading(false), 1000); // Simulate data fetching
}, []);

if (loading) {
  return <p>Loading...</p>;
}
  return (
    <div>
        <h1>
            User Detail
        </h1>

        <div>
            <p><strong>Name: </strong>{data[id - 1].name}</p>
            <p><strong>Username: </strong>{data[id - 1].username}</p>
            <p><strong>Email: </strong>{data[id - 1].email}</p>
            <p><strong>Phone: </strong>{data[id - 1].phone}</p>
            <p><strong>Website: </strong>{data[id - 1].website}</p>
        </div>
    </div>
  )
}

export default UserDetail