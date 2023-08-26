import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// 1. 전체상품 페이지 / 2. 로그인 / 3.상품상세페이지
// 1-1. 네비게이션바를 만든다.
// 2. 전체상품 페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인 버튼 누르면 로그인 페이지 나타남
// 4. 상품디테일 : 로그인이 안되어 있을 경우, 로그인 페이지가  먼저 나옴
// 5. 로그인이 되어 있을 경우, 상품 디테일 페이지 볼 수 있음 / 로그아웃 버튼 클릭시 로그아웃 됨
// 6. 로그아웃이 되면 상품 디테일 페이지 볼 수 없음 / 로그인 페이지로 변경 / 로그인을 하면 로그아웃이 보이고, 로그아웃하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

import ProductCard from '../../component/shoppingmall/ProductCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    let searchQuery = query.get('q');
    
    console.log('searchQuery',searchQuery);
    let url = ``;

    if (searchQuery !== null) {
      url = ` https://my-json-server.typicode.com/ZetGar/noonahnm/products?q=${searchQuery}`;
    } else{
      url = `https://my-json-server.typicode.com/ZetGar/noonahnm/products`;
    }
    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);
  };
  console.log('data', productList);

  const showDetail = (item) => {
    // navigate(`/shopping/products/${item.id}`);
    console.log('item.id', item);
    navigate(`/shopping/products/${item.id}`);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  // console.log(productList)

  return (
    <div>
      <h1>AllProduct</h1>
      <Container>
        <Row>
          {productList.map((item, idx) => {
            return (
              <Col
                lg={3}
                key={idx}
                onClick={() => {
                  showDetail(item);
                }}
              >
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
