import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            txtKeyword: ''
        };
    }
    render() {
        const cates = this.state.categories.map((item) => {
            return (
                <li key={item._id}><Link to={'/product/category/' + item._id}>{item.name}</Link></li>

            );
        });
        return (
            <div class="master-footer">
                <div class="main-footer">
                    <div class="first">
                        <img src="/logoVL_red.jpg" alt="" />
                        <p>Bida Văn Lang chuyên cung cấp các loại phụ kiện bida chuyên nghiệp , chất lượng, giá cả hợp lý, với
                            phương châm uy tín mang lại thương hiệu.</p>
                        <h3>0903160860</h3>
                    </div>
                    <div class="second">
                        <h2>Dịch vụ chính</h2>
                        <ul>
                            {cates}
                        </ul>
                    </div>
                    <div class="second">
                        <h2>Chính sách</h2>
                        <ul>
                            <li>Hướng Dẫn Mua Hàng</li>
                            <li>Bảo Mật Thông Tin</li>
                            <li>Chính Sách Đổi Trả</li>
                            <li>Chính Sách Thanh Toán</li>
                        </ul>
                    </div>
                    <div class="third">
                        <h2>Thông Tin Liên Hệ</h2>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                                <h5>Địa Chỉ: 216 Nguyễn Thái Bình, p.12, Tân Bình, TP.HCM.</h5>
                            </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                                <h5>Điện Thoại: 0903 160 860</h5>
                            </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
                            </svg>
                                <h5>Email: thanhson.club@gmail.com</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sub-footer">
                    <h4>Copyright 2023 © Bida Văn Lang - Phụ Kiện Bida - Xưởng Sản Xuất Bida Lớn Nhất Tại Hồ Chí Minh
                        - website designer: congdongweb.com</h4>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.apiGetCategories();
    }
    // apis
    apiGetCategories() {
        axios.get('/api/customer/categories').then((res) => {
            const result = res.data;
            this.setState({ categories: result });
        });
    }
}
export default Footer;