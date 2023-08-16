
import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Table, Button, Skeleton, Popconfirm, Alert } from "antd";
import { Link } from "react-router-dom";

const Product = () => {
    const { data: productData, isLoading } = useGetProductsQuery();
    const [removeProduct, { isSuccess: isRemoveSuccess }] =
        useRemoveProductMutation();

    const confirm = (id: number) => {
        removeProduct(id);
    };
    const dataSource = productData?.map(({ id, name, price}: IProduct) => ({
        key: id,
        name,
        price,

    }));
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "",
            render: ({ key: id }: any) => {
                return (
                <>
                <div className="flex space-x-2">
                <Popconfirm
                    title="Bạn muốn xóa chứ ?"
                    onConfirm={() => confirm(id)}
                    okText="Có"
                    cancelText="Không">
                    <Button type="primary" danger>
                        Xóa
                    </Button>
                </Popconfirm>

                <Button type="primary" danger>
                    <Link to={`/products/${id}/edit`}>Sửa</Link>
                </Button>
                </div>
                </>
                );
            },
        },
    ];

    return (
        <div>
            <header className="mb-4 flex justify-between items-center">
                <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/products/add" className="flex items-center space-x-2">
                        Thêm sản phẩm
                    </Link>
                </Button>
            </header>
            {isRemoveSuccess && <Alert message="xóa thành công" type="success" />}
            {isLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default Product;
