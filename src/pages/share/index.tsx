// import { request, useRequest } from 'umi';
import {request } from '@umijs/max';
import { message, Skeleton } from 'antd';
import { useEffect } from 'react';


import styles from './index.less';

const Share = () => {
    const getTicketDetail = () => {
        let token = '';

        try {
            const url = new URL(location.href);
            const searchParams = url?.searchParams;
            token = searchParams?.get('token') || '';
            if (!token) {
                message.error('分享链接错误，请重新分享');
            }
        } catch (e) {}

        request(`/cs/ts/api/ticket_share/detail?token=${token}`);
    };


    useEffect(() => {
        getTicketDetail();
    }, []);

    return (
        <div className={styles['page']}>
        </div>
    );
};

export default Share;
