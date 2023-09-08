import { useParams } from 'react-router';

import { Coin } from '../../components/Coin/Coin';
import { Layout } from '../../components/Layout/Layout';

const CoinPage = () => {
    const params = useParams();
    return (
        <Layout>
            <Coin id={params?.id || ''} />
        </Layout>
    );
};
export default CoinPage;
