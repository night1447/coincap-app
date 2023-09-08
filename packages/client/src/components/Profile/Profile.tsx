import { useState } from 'react';

import { Bag } from '../Bag/Bag';
import { Button } from '../UI/Button/Button';
import { ProfileIcon } from '../UI/Icons';

import styles from './profile.module.scss';

export const Profile = () => {
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
                data-testid={'profile-show'}
                type={'button'}
                variant={'accent'}
                isCircle={true}
                onClick={showBriefCaseHandler}
                className={styles.btn}
            >
                <ProfileIcon />
            </Button>
            <Bag onClose={closeBriefCaseHandler} showBag={showBriefCase} />
        </>
    );
};
