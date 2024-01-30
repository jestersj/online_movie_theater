import Image from "next/image";
import HeaderSection from "@/app/_components/HeaderSection/HeaderSection";
import List from "@/app/_components/List/List";
import movies from './movies'
import Card from "@/app/_components/Card/Card";
import Link from "next/link";
import s from "./page.module.css";

export default function Home() {
    return (
        <>
            <HeaderSection/>
            <List title={'Новинки'} gap={40}>
                {
                    movies.new.map(item =>
                        <Card item={item} key={item.name}/>
                    )
                }
            </List>
            <div>
                <h2 className={s.title}><span className={s.gradient_border}>Топ-10</span> просмотров за неделю</h2>
                <List gap={80}>
                    {
                        movies.topTen.map((item, ind) =>
                            <Link href={'/series'} key={item.name} className={s.top10_item}>
                                <span className={s.top10_number}>{ind + 1}</span>
                                <Image src={item.img} alt={item.name} className={s.top10_img}/>
                            </Link>
                        )
                    }
                </List>
            </div>
        </>
    );
}
