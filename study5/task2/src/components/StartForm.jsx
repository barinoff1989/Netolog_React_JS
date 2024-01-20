import './StartForm.css';
import { HeadForm } from './HeadForm';
import { HeadNewsList } from './HeadNews/HeadNewsList';
import { CommonNewsList } from './CommonNews/CommonNewsList';
import { CurrencyBlockList } from './CurrencyBlock/CurrencyBlockList';
import { MainHeadsList } from './MainHeads/MainHeadsList';
import { MainBlock } from './MainBlock';
import { FooterInfoList } from './FooterInfo/FooterInfoList';
import { FooterBlock } from './FooterBlock';
import { FooterContainer } from './FooterContainer';


export const StartForm = () => {

  const hnewslist = [
    {link:"/hnlist1",text:"Сейчас  СМИ"},
    {link:"/hnlist2",text:"в Германии"},
    {link:"/hnlist3",text:"Рекомендуем"}
  ];
  const cnewslist = [
    {link:"/cnlist1",text:"Путин упростил",img:"/logo1.png"},
    {link:"/cnlist2",text:"в команде Зеленского",img:"/logo2.png"},
    {link:"/cnlist3",text:"Турпомощь",img:"/logo3.png"},
    {link:"/cnlist3",text:"Суд закрыл",img:"/logo3.png"},
    {link:"/cnlist3",text:"Текст5",img:"/logo3.png"}
  ];
  const currlist = [
    {link:"/currlist1",text:"USD"},
    {link:"/currlist2",text:"EUR"},
    {link:"/currlist3",text:"НЕФТЬ"}
  ];
  const mainhlist = [
    {link:"/mainhlist1",text:"Видео"},
    {link:"/mainhlist2",text:"Картинки"},
    {link:"/mainhlist3",text:"Новости"},
    {link:"/mainhlist3",text:"Карты"},
    {link:"/mainhlist3",text:"Маркет"} 
  ];
  const finfolist1 = [
    {link:"/fnlist11",text:"Недвижимость"},
    {link:"/fnlist12",text:"маркет"},
    {link:"/fnlist13",text:"АвтоРу"}
  ];
  const finfolist2 = [
    {link:"/fnlist21",text:"ТНТ"},
    {link:"/fnlist22",text:"Джингл"},
    {link:"/fnlist23",text:"НаединеСоВсеми"}
  ];
  const finfolist3 = [
    {link:"/fnlist31",text:"Управление"},
    {link:"/fnlist32",text:"Ночь"},
    {link:"/fnlist33",text:"Андрей"}
  ];

  return (    
    <div>
      <HeadForm>
        <HeadNewsList items = {hnewslist}/>
        <CommonNewsList items = {cnewslist}/>
        <CurrencyBlockList items = {currlist}/>
      </HeadForm>
      <MainHeadsList items = {mainhlist}/>
      <MainBlock >
        <img src="/logo1.png"/ >
          <input type="text" placeholder="Введите текст"/>
          <button>Найти</button>
      </MainBlock>
      <p className='centered-text'>Какой-то текст</p>
      <a href="/test" className='centered-image'>
       <img src="/logo1.png" />
      </a>
      <FooterContainer>
        <FooterBlock>
           <a href="#" class="bold-link">Погода</a>
           <div><img src="/logo1.png" /></div>  
          <FooterInfoList items = {finfolist1} title = "Посещаемое"/>
        </FooterBlock>
        <FooterBlock>
           <a href="#" class="bold-link">Карта Германии</a>
           <div><h>Расписание</h></div>
          <FooterInfoList items = {finfolist2} title = "Телепрограмма"/>
        </FooterBlock>
        <FooterBlock>
          <FooterInfoList items = {finfolist3} title = "Эфир"/>
        </FooterBlock>
      </FooterContainer>
    </div>)

};
 
