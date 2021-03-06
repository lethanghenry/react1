import axios from 'axios'
import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'

const listCategory=[
    {id:0,name:"Thế Giới"},
    {id:1,name:"Việt Nam"},
    {id:2,name:"Thời Sự"},
    {id:3,name:"Tin Tức"},
    {id:4,name:"Bóng Đá"},
    {id:5,name:"Âm Nhạc"},
    {id:6,name:"Bóng Chuyền"},
    {id:7,name:"Bóng Rổ"},
    {id:8,name:"Cầu Lông"},
    {id:9,name:"Quần Vợt"},
    {id:10,name:"Đua Ngựa"},
    {id:11,name:"Ảo Thuật"},
    {id:12,name:"Chính Trị"}
]
const listPosition = [{ id: 1, name: "Việt Nam" }, { id: 2, name: "Châu Á" }, { id: 3, name: "Châu Âu" }, { id: 4, name: "Châu Mỹ" }]
// Print List blog
export default function Content() {

    const [blogs, setBlogs] = useState([])


    const handlePosition = (position) => 
    {
        return listPosition.map((value, key) => 
        {
            return position.map((v) => 
            {
                if (value.id == v) {
                    return value.name;
                }
            })
        })
    }
    const handleCategory = (category) => 
    {
        return listCategory.map((value, key) => 
        {
            
                if (value.id == category) {
                    return value.name;
                }
            
        })
    }


    // call api get
    useEffect(() => {
        axios.get(`http://localhost:3000/blogs`)
            .then(res => {
                setBlogs(res.data);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="card">
            <div className="card-header">
                <h3>List Blog</h3>
            </div>
            <div className="card-body">

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Tin
                            </th>
                            <th>
                                Loại
                            </th>
                            <th>
                                Trạng thái
                            </th>
                            <th>
                                Vị trí
                            </th>
                            <th>
                                Ngày public
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) =>
                            <tr>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{handleCategory(blog.category)}</td>
                                <td>{blog.public ? "true" : "false"}</td>
                                <td>{handlePosition(blog.position)}</td>
                                <td>{blog.data_pubblic}</td>
                                <td><button className="btn btn-outline-primary">Edit</button></td>
                                <td><button className="btn btn-outline-danger">Delete</button></td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>
            <div className="card-footer">

            </div>
        </div>
    );
}
