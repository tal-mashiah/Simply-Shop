const initialState = {
    compareProducts: [],
    // [
    //     {
    //       _id: '5f1aeb759b2afcbfe1d21ca1',
    //       title: 'מחשב נייד HP 15-dw2026nj',
    //       description: 'המחשב הנייד האולטימטיבי שמשלב ביצוע עוצמתי ותמונות מרהיבות. תצוגה מקסימלית עם מסך ללא מסגרת מאפשרת צפייה מטווח של 178 מעלות וכוללת ציפוי מט למראות סוחפים ומהפנטים. מנועי הכוח שלו הם המעבד Intel Core i7 (דור 8), זיכרון RAM של עד 16GB/2400MHz והכרטיס NVIDIA MX250 לעיבוד גרפיקות מדויקות. האחסון הכפול שלו – עד 512GB בכונן PCIe SSD ועד 1TB בדיסק הקשיח – הוא שילוב מושלם של נפח אחסון גדול ועיבוד נתונים היפר-מהיר. ואם לא די בכך, מחשב זה גם כולל את טכנולוגיית Intel Optane memory1 לזירוז תהליכי עיבוד.',
    //       price: 4980,
    //       imagesUrl: [
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/dsldho3zqjw2qv4umn86.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/qca4a6htknwghpznfzzh.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/mcvqen9myruiyop2ddnb.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/jjlckyy8q870vmxsluxb.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/azbvqxp6i0ybk18xqpzs.jpg'
    //       ],
    //       videoUrl: 'https://www.youtube.com/watch?v=BkBl0SFHV64',
    //       inStock: true,
    //       categoryId: '5e9392bb8213516b835c04e8',
    //       specValues: [
    //         '5e9423328213516b835c25fc',
    //         '5e941f258213516b835c23fd',
    //         '5e9428488213516b835c27ea',
    //         '5e9427908213516b835c27ab',
    //         '5e94206b8213516b835c24ee',
    //         '5e9421508213516b835c2555',
    //         '5e9422998213516b835c25c4'
    //       ]
    //     },
    //     {
    //       _id: '5f29eae5b240cd6085f529f0',
    //       title: 'טאבלט Samsung Galaxy Tab S6 Lite 4G P615',
    //       description: 'טאבלט מבית Samsung מעבד Octa Core במהירות 2.3GHz, מסך "10.4, זכרון בנפח 4GB,  אחסון בנפח 64GB, מצלמה אחורית 8MP ומצלמה קדמית 5MP. כולל S Pen. כולל תמיכה בכרטיס - SIM.',
    //       price: 3500,
    //       imagesUrl: [
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/lexdarqz6g8xfk3mnqkz.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/kjh1d3t1y8uca3kv4bl3.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/hzuqcflwnnahtyc6hq9p.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/mnerhqpibzoiyg8rwqym.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/evkt4wiwmoutb8k4ggaf.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/kv2vpt6rtutpvnf87xlx.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/ktwettcl4nkuwffuogbe.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/d4gwe9ehfetx8gsskgrv.jpg'
    //       ],
    //       videoUrl: 'https://www.youtube.com/watch?v=npF6UqjmAYQ',
    //       inStock: true,
    //       categoryId: '5f29eac8bdb02afca412b462',
    //       specValues: [
    //         '5f29ec30e8a8db32a8019f60',
    //         '5f29ec62e8a8db32a8019f61',
    //         '5f29ec9ae8a8db32a8019f62',
    //         '5f29ecd7e8a8db32a8019f63',
    //         '5f29ecf7e8a8db32a8019f64',
    //         '5f29ee18e8a8db32a8019f65',
    //         '5e9433b48213516b835c2bd5',
    //         '5f29ee51e8a8db32a8019f66',
    //         '5f29ee90e8a8db32a8019f67'
    //       ]
    //     },
    //     {
    //       _id: '5f283f1f0c609dd2b139911c',
    //       title: 'מחשב נייח גיימינג Custom Build AMD',
    //       description: 'המחשב הנייד האולטימטיבי שמשלב ביצוע עוצמתי ותמונות מרהיבות. תצוגה מקסימלית עם מסך ללא מסגרת מאפשרת צפייה מטווח של 178 מעלות וכוללת ציפוי מט למראות סוחפים ומהפנטים. מנועי הכוח שלו הם המעבד Intel Core i7 (דור 8), זיכרון RAM של עד 16GB/2400MHz והכרטיס NVIDIA MX250 לעיבוד גרפיקות מדויקות. האחסון הכפול שלו – עד 512GB בכונן PCIe SSD ועד 1TB בדיסק הקשיח – הוא שילוב מושלם של נפח אחסון גדול ועיבוד נתונים היפר-מהיר. ואם לא די בכך, מחשב זה גם כולל את טכנולוגיית Intel Optane memory1 לזירוז תהליכי עיבוד.',
    //       price: 13500,
    //       imagesUrl: [
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/spxrp7ps0bildydwhkht.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/ryqmg1pbaa4ihkfosjkb.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/t9uh3i6gzb4eupdivbcj.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/fqdamw341erptda65r00.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/tiyx5dtfwdveu3hlmj1d.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/ce2cjzdkf5zxfacucuas.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/eieebigporgx9lglury2.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/b3o89njesgxit7du9riy.jpg'
    //       ],
    //       videoUrl: null,
    //       inStock: true,
    //       categoryId: '5e9392bb8213516b835c04e5',
    //       specValues: [
    //         '5f2450def171cc6c7c1d457c',
    //         '5e94286c8213516b835c27fa',
    //         '5e9428168213516b835c27d8',
    //         '5f284407813301a76537e47a',
    //         '5f2844da813301a76537e47b'
    //       ]
    //     },
    //     {
    //       _id: '5f1af6199b2afcbfe1d21ca2',
    //       title: 'מחשב נייד Dell Inspiron N5491-8117',
    //       description: 'המחשב הנייד האולטימטיבי שמשלב ביצוע עוצמתי ותמונות מרהיבות. תצוגה מקסימלית עם מסך ללא מסגרת מאפשרת צפייה מטווח של 178 מעלות וכוללת ציפוי מט למראות סוחפים ומהפנטים. מנועי הכוח שלו הם המעבד Intel Core i7 (דור 8), זיכרון RAM של עד 16GB/2400MHz והכרטיס NVIDIA MX250 לעיבוד גרפיקות מדויקות. האחסון הכפול שלו – עד 512GB בכונן PCIe SSD ועד 1TB בדיסק הקשיח – הוא שילוב מושלם של נפח אחסון גדול ועיבוד נתונים היפר-מהיר. ואם לא די בכך, מחשב זה גם כולל את טכנולוגיית Intel Optane memory1 לזירוז תהליכי עיבוד.',
    //       price: 7999,
    //       imagesUrl: [
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/a9vetc90rbw2ajcx2udl.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/pze4yr7rxw7end9rjlx1.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/t33xsn0yvux5vhtljea5.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/ilumfbmbbm321nznw9zn.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/aje02cqrryec59uisqt8.jpg',
    //         'http://res.cloudinary.com/talmashiah/image/upload/w_350/v1/corona/lgcpttmghtmrutc20ylz.jpg'
    //       ],
    //       videoUrl: 'https://www.youtube.com/watch?v=XPG8jEGaVmQ',
    //       inStock: true,
    //       categoryId: '5e9392bb8213516b835c04e8',
    //       specValues: [
    //         '5e94350b8213516b835c2c4f',
    //         '5e9428bd8213516b835c281e',
    //         '5e9420368213516b835c24dd',
    //         '5e94206b8213516b835c24ee',
    //         '5e9421508213516b835c2555',
    //         '5e9422998213516b835c25c4',
    //         '5e9423328213516b835c25fc'
    //       ]
    //     }
    //   ],
    maxComparedNumber: 4
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_COMPARE_PRODUCT':
            const isExist = state.compareProducts.some(product => product._id === action.product._id);
            if (isExist) {
                const filteredProducts = state.compareProducts.filter(product => product._id !== action.product._id)
                return { ...state, compareProducts: filteredProducts };
            }
            return { ...state, compareProducts: [...state.compareProducts, action.product] };
            case 'DELETE_COMPARED_PRODUCTS':
                return { ...state, compareProducts: [] };
        default:
            return state;
    }
}