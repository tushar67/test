'use client';

import  Container  from "../Container";
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb';
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { IoDiamond} from 'react-icons/io5';
import {BsSnow} from 'react-icons/bs';
import {MdOutlineVilla} from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";



export const categories =[
    {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!'
    },
    {
        label: 'windmills',
        icon: GiWindmill,
        description: 'This property is has windmill!'
        },
        {
            label: 'Morden',
            icon: MdOutlineVilla,
            description: 'This property is morden!'
            },
            {
                label: 'country side',
                icon: TbMountain,
                description: 'This property is country side!'
                },
                {
                    label: 'pool',
                    icon: TbPool,
                    description: 'This property is pool!'
                    },
                    {
                        label: 'Island',
                        icon: GiIsland,
                        description: 'This property is on Island!'
                        },
                        {
                            label: 'Lake',
                            icon: GiBoatFishing,
                            description: 'This property is lake!'
                            },
                            {
                                label: 'sking',
                                icon: FaSkiing,
                                description: 'This property is sking property!'
                                },
                                {
                                    label: 'castel',
                                    icon: GiCastle,
                                    description: 'This property is castel!'
                                    },
                                    {
                                        label: 'camping',
                                        icon: GiForestCamp,
                                        description: 'This is camping!'
                                        },
                                        {
                                            label: 'Arctic',
                                            icon: BsSnow,
                                            description: 'This property is snow!'
                                            },
                                            {
                                               label: 'cave',
                                                icon: GiCaveEntrance,
                                                description: 'This property is cave!'
                                                },
                                                {
                                                    label: 'desert',
                                                    icon: GiCactus,
                                                    description: 'This property is desert!'
                                                    },
                                                    {
                                                        label: 'barns',
                                                        icon: GiBarn,
                                                        description: 'This property is barn!'
                                                        },
                                                        {
                                                            label: 'lux',
                                                            icon: IoDiamond,
                                                            description: 'This property is morden!'
                                                            },
]

const Categories = () => {
    const params =useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if(!isMainPage){
        return null;
    }

    return ( 
        
        <Container>
            <div
            className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto

            "
            >
                {categories.map((item)=>
                <CategoryBox 
                key={item.label}
                label={item.label}
                selected={category == item.label}
                icon={item.icon}
                
                />
                )}
            </div>
        </Container>
    );
}

export default Categories;
