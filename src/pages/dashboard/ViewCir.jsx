import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../assets/wrappers/Home'
import { toast } from 'react-toastify'
const ViewCir = () => {
  const [checkData, setCheckData] = useState(true)
  const [formData, setFormData] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/api/addcir/");
    const data = await response.json();
    if (data.message === "No data found") {
      setCheckData(false)
      setFormData([])
    }
    else {
      setFormData(data?.data)
      setCheckData(true)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  const handleDelete = (_id) => {

    fetch('http://localhost:8080/api/addcir/' + _id, {
      method: 'DELETE',
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        debugger
        fetchData();
        if (data.message === 'Record Deleted') {
          toast.success("Record Deleted")
        }
        else {
          toast.error("Delete Successfully !!")
        }
      })

  }
  return (
    <Wrapper>
      <main className='dashboard'>
        <Sidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>

            <div className="">
              <h3 style={{ textAlign: "center" }}>view Circular</h3>
              <table>
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Circular No.</th>
                    <th>file Language</th>
                    <th>file Description</th>
                    <th>Issued On</th>
                    <th>Issued By</th>
                    <th>file</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.length > 0 ? formData.map((item, key) => {
                    return (
                      <tr key={item._id}>
                        <td>{key + 1}</td>
                        <td>{item.circularNumber}</td>
                        <td>{item.language}</td>
                        <td>{item.description}</td>
                        <td>{item.issuedOn}</td>
                        <td>{item.issuedBy}</td>
                        <td><a classname="fileLink" target='_blank' href={`http://localhost:8080/public/AddCirFile/${item.file}`}>view file link</a></td>
                        <td style={{ color: "red" }}><button type='button' onClick={() => handleDelete(item._id)} className='btn'>Delete</button></td>
                      </tr>
                    )
                  }) : <tr >
                    <td colSpan="8">No data Found</td>
                  </tr>}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default ViewCir
