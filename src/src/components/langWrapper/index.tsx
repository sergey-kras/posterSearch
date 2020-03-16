import React, {ReactElement, useState} from 'react';
import { ru } from '../../../localize/ru';
import { en } from '../../../localize/en';
import { TopBar } from '../topBar';
import { IntlProvider } from 'react-intl';
import { Langs } from '../../../localize/types';

export const LangWrapper = (props: { children: ReactElement }) => {
    const browserLang = getBrowserLang();
    const [ lang, setLang ] = useState(browserLang);
    const { children } = props;
    const currentLang = getLangConfig(lang);

    return (
        <IntlProvider { ...currentLang || en }>
            <TopBar lang={lang as Langs} onChangeLang={setLang}/>
            {children}
        </IntlProvider>
    );
};


const getLangConfig = (lang: string) => {
    switch (lang) {
        case 'ru-RU':
            return ru;
        case 'en-EN':
            return en;
    }
};

const getBrowserLang = () => {
    // @ts-ignore
    const lang = navigator.language || navigator.userLanguage;

    if(!getLangConfig(lang)) {
        return 'en-EN';
    }

    return lang;
};
