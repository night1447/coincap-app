import CoinInterface from '../../components/CoinInterface/CoinInterface.tsx';
import { useParams } from 'react-router';
import Layout from '../../components/Layout/Layout.tsx';

const CoinPage = () => {
    const params = useParams();
    return (
        <Layout>
            <CoinInterface id={params?.id || ''} />
        </Layout>
    );
};
export default CoinPage;
