import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import BorderCountries from '../borderCountries/BorderCountries'

const DetailCard = ({ data }) => {
    const { name, flags: { png }, population, region, subregion, capital, tld, currencies, languages, borders } = data
    const { common: commonName, nativeName } = name
    const native = []
    const currency = []
    const language = []
    const sortedLangauage = []

    const hasLanguage = () => {
        if('languages' in data){
            Object.values(languages).map((lang) => language.push(lang))
            // eslint-disable-next-line
            language.map((lang) => {
                if(!sortedLangauage.includes(lang)) sortedLangauage.push(lang)
            })
        }
        return sortedLangauage
    }

    const hasCurrency = () => {
        if ('currencies' in data) {
            Object.values(currencies).map((money) => money.name ? currency.push(money.name) : currency.push("Not Found"))
        }
        return currency
    }

    const hasNativeName = () => {
        if('nativeName' in name){
            Object.values(nativeName).map((name) => native.push(name.common))
        }
        return native[native.length - 1]
    }

    return (
        <>
            <div className='flex flex-wrap justify-between items-center mt-12'>
                <div style={{ backgroundImage: `url("${png}")` }} className='bg-center bg-cover mt-14 shadow-xl w-2/5 h-72'></div>
                <div className='w-5/9'>
                    <h1 className='font-extrabold text-2xl  dark:text-darkModeTextAndDarkModeElements'>{commonName}</h1>
                    <div className='flex justify-between pt-5'>
                        <div className='w-2/4'>
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>Native Name: <span className='dark:text-slate-200 font-normal'>{hasNativeName()}</span></p >
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>Population: <span className='dark:text-slate-200 font-normal'>{population}</span></p >
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>Region: <span className='dark:text-slate-200 font-normal'>{region}</span></p >
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>Sub Region: <span className='dark:text-slate-200 font-normal'>{subregion}</span></p >
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>Capital: <span className='dark:text-slate-200 font-normal'>{capital}</span></p >
                        </div>
                        <div className='w-2/4'>
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>Top Level Domain: <span className='dark:text-slate-200 font-normal'>{tld}</span></p >
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>Currencies: <span className='dark:text-slate-200 font-normal'>{hasCurrency()}</span></p >
                            <p className=' pt-2 pb-2 dark:text-darkModeTextAndDarkModeElements font-semibold'>{hasLanguage().length > 1 ? "Languages" : "Language"}: {hasLanguage().map((lang) => <span key={uuidv4()} className='dark:text-slate-200 font-normal'>{lang}, </span>)}</p>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <div className=''>
                            <p className='font-extrabold dark:text-darkModeTextAndDarkModeElements'>Border Countries:</p>
                        </div>

                        <BorderCountries borders={borders}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCard
