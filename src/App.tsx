import Layout from "./UI/Layout/Layout.tsx";
import Button from "./UI/Button/Button.tsx";
import Section from "./UI/Section/Section.tsx";

const App = () => (
    <Layout>
        <Section>
            <Button type={'button'} variant={'default'} isCircle={true}>test</Button>
            <Button type={'button'} variant={'error'}>test</Button>
            <Button type={'button'} variant={'accent'}>test</Button>
        </Section>
    </Layout>
);

export default App
