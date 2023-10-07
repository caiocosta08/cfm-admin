import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
    border: 1.5px solid #e4e3e3;
    border-radius: 5px;
`;

export const ContainerArticle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFFFFF;
    width: 100%;
    min-height: 80vh;
    flex: 2;
    border-radius: 10px 0px 0px 10px;
    // border-right: 0.5px solid #afafaf;
`;

export const ContainerArticleTitle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    font-size: 20px;
    color: #000000;
    margin: 30px 0px;
`;

export const ContainerArticleContent = styled.div`
    width: 90%;
    font-size: 14px;
    color: #64748B;
    margin-top: 10px;
    flex: 1;
`;

export const ContainerArticleContentBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    padding: 10px 0px;
`;

export const ContainerArticleDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #F5F5F7;
    width: 100%;
    min-height: 80vh;
    flex: 1;
    border-radius: 0px 10px 10px 0px;
    border-left: 0.5px solid #afafaf;
`;

export const AvatarCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: left;
    align-items: center;
`;

export const AvatarChip = styled.img<{
    $size?: string;
}>`
    border-radius: 50%;
    border: 0.5px solid #0687FE;
    width: ${props => props.$size ? props.$size : '30px'};
    height: ${props => props.$size ? props.$size : '30px'};
    margin-right: 5px;
    margin-left: 5px;
`;

export const AvatarTitle = styled.div<{
    $fontSize?: string;
}>`
    font-size: ${props => props.$fontSize ? props.$fontSize : '10px'};
    color: #000000;
`;

export const VerticalSeparator = styled.div`
    width: 0.5px;
    background-color: #979797;
    height: 14px;
    margin: 0px 10px;
`;

export const HorizontalSeparator = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: #979797;
`;

export const CircularItem = styled.div<{
    $button?: boolean;
}>`
    height: 20px;
    width: 20px;
    border-radius: 50px;
    margin: 0px 10px;
    font-size: 11px;
    border: 0.5px solid ${props => props.color};
    color: ${props => props.color};
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.$button ? 'pointer' : 'default'};
`;

export const ColoredCard = styled.div`
    border-color: ${props => props.color};
    color: ${props => props.color};
    background-color: ${props => props.color + '20'};
    margin: 3px;
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border: solid 1px;
    border-radius: 4px;
    max-width: 150px;
`;

export const ColoredCardDetails = styled.div`
    border-color: ${props => props.color};
    color: ${props => props.color};
    background-color: ${props => props.color + '20'};
    margin: 3px;
    padding: 6px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    border: solid 0.5px;
    border-radius: 5px;
    max-width: 150px;
    cursor: pointer;
`;

export const ColoredCardTwo = styled.div<{
    $bgColor?: string;
    $color?: string;
}>`
    color: ${props => props.$color ? props.$color : '#231F20'};
    background-color: ${props => props.$bgColor};
    margin: 3px;
    padding: 6px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    border: solid 1px ${props => props.color};
    border-radius: 4px;
    min-width: 75px;
    cursor: pointer;
`;

export const Row = styled.div`
    margin: 10px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const OverflowRightItem = styled.div`
    color: ${props => props.color};
    font-size: 12px;
`;

export const ContainerArticleDetailRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 60px;
    background-color: #F5F5F7;
    padding: 10px 20px;
    border-bottom: 0.5px solid #9E9E9E;
`;

export const ContainerArticleDetailTitle = styled.div`
    font-size: 16px;
    color: #000000;
    flex: 1;
    font-weight: bold;
    font-family: sans-serif
`;

export const DetailedViewsCard = styled.div`
    border-radius: 2px;
    border: 1px solid #FF0000;
    color: #FF0000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 12px;
`;

export const DivergenceText = styled.div`
    font-size: 10px;
    color: #979797;
    flex: 1;
    margin-left: 5px;
    line-height: 12px;
`;