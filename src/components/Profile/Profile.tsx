import { FC, useState } from 'react';
import Button from '../../UI/Button/Button.tsx';
import styles from './profile.module.scss';
import BriefCaseInterface from '../BriefCaseInterface/BriefCaseInterface.tsx';
import { ProfileIcon } from '../../UI/Icons';

const Profile: FC = () => {
    const [showBriefCase, setShowBriefCase] = useState(false);

    const closeBriefCaseHandler = () => {
        setShowBriefCase(false);
    };

    const showBriefCaseHandler = () => {
        setShowBriefCase(true);
    };

    return (
        <>
            <Button
                type={'button'}
                variant={'accent'}
                isCircle={true}
                onClick={showBriefCaseHandler}
                className={styles.btn}
            >
                <ProfileIcon />
            </Button>
            <BriefCaseInterface onClose={closeBriefCaseHandler} showBriefCase={showBriefCase} />
        </>
    );
};
export default Profile;
