import { Coin } from '../../components/Coin/Coin.tsx';
import { useParams } from 'react-router';
import { Layout } from '../../components/Layout/Layout.tsx';

const CoinPage = () => {
    const params = useParams();
    return (
        <Layout>
            <Coin id={params?.id || ''} />
        </Layout>
    );
};
export default CoinPage;
