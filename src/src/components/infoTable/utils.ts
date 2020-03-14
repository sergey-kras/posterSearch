import { Props } from './index';

/**
* @function serialiseData
 * @description Функция служит для того, чтобы убрать лишние поля
 * из исходного обекта фильма и передать в InfoTable только те, что ему нужны
*/

export const serialiseData = (data: any): Props => {
    const needKeys: Array<keyof Props>= [
        'Rated',
        'Released',
        'Runtime',
        'Genre',
        'Director',
        'Writer',
        'Actors',
        'Language',
        'Country',
        'Awards',
        'Ratings',
        'Metascore',
        'imdbRating',
        'imdbVotes',
        'Type',
        'DVD',
        'BoxOffice',
        'Production',
    ];
    
    const result: Props = {};
    for(const [key, value] of Object.entries(data)) {
        // Пофиксить после типизации data
        // @ts-ignore
        if(needKeys.indexOf(key) >= 0) {
            // @ts-ignore
            result[key] = value;
        }
    }

    return result;
};
