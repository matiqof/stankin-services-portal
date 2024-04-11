export interface TableItem {
    id: number;
    name: string;
    m1: number | null | 'x';
    m2: number | null | 'x';
    coursework: string;
    university_credit: string;
    exam: string;
    coefficient: string;
}

export const data: TableItem[] = {
    nodes: [
        {
            id: 1,
            name: 'Вычислительная математика',
            m1: 52,
            m2: null,
            coursework: 'x',
            university_credit: 'x',
            exam: '',
            coefficient: '3.0'

        },
        {
            id: 2,
            name: 'Инфографика',
            m1: 44,
            m2: null,
            coursework: 'x',
            university_credit: 'x',
            exam: '',
            coefficient: '1.5'

        },
        {
            id: 3,
            name: 'Объектно-ориентированное программирование',
            m1: 52,
            m2: null,
            coursework: '',
            university_credit: 'x',
            exam: '',
            coefficient: '3.5'

        },
        {
            id: 4,
            name: 'Операционные системы',
            m1: 44,
            m2: null,
            coursework: 'x',
            university_credit: '',
            exam: 'x',
            coefficient: '2.5'

        },
        {
            id: 5,
            name: 'Основы военной подготовки',
            m1: null,
            m2: null,
            coursework: 'x',
            university_credit: '',
            exam: 'x',
            coefficient: '1.5'

        },
        {
            id: 6,
            name: 'Прикладная физическая культура',
            m1: null,
            m2: null,
            coursework: 'x',
            university_credit: '',
            exam: 'x',
            coefficient: '1.0'

        },
        {
            id: 7,
            name: 'Прикладная физическая культура',
            m1: null,
            m2: null,
            coursework: 'x',
            university_credit: '',
            exam: 'x',
            coefficient: '1.0'

        },
        {
            id: 8,
            name: 'Теория вероятностей и математическая статистика',
            m1: null,
            m2: null,
            coursework: 'x',
            university_credit: '',
            exam: 'x',
            coefficient: '3.0'

        },
        {
            id: 9,
            name: 'Технологии индустрии 4.0',
            m1: null,
            m2: null,
            coursework: 'x',
            university_credit: '',
            exam: 'x',
            coefficient: '3.0'

        },
        {
            id: 10,
            name: 'Технологии интеллектуального анализа данных',
            m1: 25,
            m2: null,
            coursework: 'x',
            university_credit: 'x',
            exam: '',
            coefficient: '2.0'

        },
        {
            id: 11,
            name: 'Технологии разработки программных средств',
            m1: null,
            m2: null,
            coursework: 'x',
            university_credit: 'x',
            exam: '',
            coefficient: '4.0'

        },
        {
            id: 12,
            name: 'Управление данными',
            m1: 54,
            m2: null,
            coursework: 'x',
            university_credit: '',
            exam: 'x',
            coefficient: '4.0'

        },
        {
            id: 13,
            name: 'Рейтинг',
            m1: null,
            m2: 'x',
            coursework: 'x',
            university_credit: 'x',
            exam: 'x',
            coefficient: 'x'

        },
        {
            id: 14,
            name: 'Накопленный Рейтинг',
            m1: null,
            m2: 'x',
            coursework: 'x',
            university_credit: 'x',
            exam: 'x',
            coefficient: 'x'

        },
    ]
}