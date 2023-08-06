import Layout from "./UI/Layout/Layout.tsx";
import Button from "./UI/Button/Button.tsx";
import Section from "./UI/Section/Section.tsx";
import Typography from "./UI/Typography/Typography.tsx";

const App = () => (
    <Layout>
        <Section>
            <Button type={'button'} variant={'default'} isCircle={true}>test</Button>
            <Button type={'button'} variant={'error'}>test</Button>
            <Button type={'button'} variant={'accent'}>test</Button>
            <Typography type={'h1'}>hello</Typography>
            <Typography type={'h2'}>hello</Typography>
            <Typography type={'h3'}>hello</Typography>
            <Typography type={'p'}>hello</Typography>
        </Section>
    </Layout>
);

export default App
