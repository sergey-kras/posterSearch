import React, {ReactElement, useState} from 'react';
import { ru } from '../../../localize/ru';
import { en } from '../../../localize/en';
import { TopBar } from '../topBar';
import { IntlProvider } from 'react-intl';
import {Langs} from "../../../localize/types";

export const LangWrapper = (props: { children: ReactElement }) => {
    const [ lang, setLang ] = useState('en');
    const { children } = props;
    const currentLang = getLangConfig(lang);

    return (
        <IntlProvider { ...currentLang }>
            <TopBar lang={lang as Langs} onChangeLang={setLang}/>
            {children}
        </IntlProvider>
    );
};

const getLangConfig = (lang: string) => {
    switch (lang) {
        case 'ru':
            return ru;
        case 'en':
            return en;
    }

    return en;
};
