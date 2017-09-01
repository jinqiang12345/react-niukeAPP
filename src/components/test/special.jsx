import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Card
} from 'antd-mobile';
export default class special extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('精华专题');
  }
  render() {
    const photo = {width: "2.5rem",height: "1.5rem", marginRight: ".5rem"};
    const data1 = [
      {
        url: 'http://images.freeimages.com/images/premium/previews/3080/30803618-education-concept-head-with-keyhole-and-lesson-on-chalkboard-ba.jpg',
        title: '前端面试经典题目合集',
        num: 72,
        people: 13657
      },
      {
        url: 'https://static01.nyt.com/images/2015/12/27/books/review/27openbook-LN2/27openbook-master675.jpg',
        title: '剑指Offer',
        num: 66,
        people: 1481163
      },
      {
        url: 'https://flyingbullschool.files.wordpress.com/2014/03/every-lesson-counts.png',
        title: '2017校招真题编程练习',
        num: 69,
        people: 34133
      },
      {
        url: 'https://dataworks-ed.com/wp-content/uploads/2014/08/A-Better-PowerPoint-Lesson.png',
        title: '2016校招真题编程练习',
        num: 105,
        people: 273579
      },
      {
        url: 'http://study.com/cimages/course-image/high-school-chemistry-syllabus-resource-lesson-plans_138512_large.jpg',
        title: '数据库SQL实战',
        num: 61,
        people: 17040
      },
      {
        url: 'http://wosu.org/wp-content/uploads/2015/10/columbus-neighborhoods-1.jpg',
        title: 'leetcode在线编程训练',
        num: 148,
        people: 224584
      },
      {
        url: 'https://ichef.bbci.co.uk/images/ic/1200x675/p03cp7r6.jpg',
        title: 'ACM在线编程训练',
        num: 7418,
        people: 107655
      },
      {
        url: 'https://i.ytimg.com/vi/1fJN8bffTW4/maxresdefault.jpg',
        title: 'ACM解题大全',
        num: 9380,
        people: 34647
      },
      {
        url: 'https://www.pittsfordschools.org/cms/lib/NY02205365/Centricity/Template/GlobalAssets/images///PCSD%20Logos/Color%20Two%20line%20Stacked%20Pittsford%20Schools.jpg',
        title: 'C/C++面试经典题目合集',
        num: 19,
        people: 46827
      },
      {
        url: 'https://illuminations.nctm.org/uploadedImages/Content/Lessons/Highlights_Rotator/NCTMKenKen_Clear_Bkgrd_INTRO_Screen.png',
        title: '软件测试经典题目合集',
        num: 24,
        people: 20049
      },
    ];
  const CardItems1 = data1.map((data) =>
    <Card full>
      <Card.Header
        title={
        <span style={{ width: "50%"}}>
          <span style={{ fontSize: "70%"}}>
            <FontAwesome name='sliders' style={{ marginRight: "5%"}}/>
            {data.title}
          </span>
          <br/>
          <span style={{ fontSize: "60%", color: "#4D5656" }}>
            <FontAwesome name='folder-o' style={{ marginRight: "5%"}}/>
            共{data.num}题
          </span>
          <br/>
          <span style={{ fontSize: "60%", color: "#4D5656" }}>
            <FontAwesome name='street-view' style={{ marginRight: "5%"}}/>
            {data.people}人学习
          </span>
        </span>
        }
        thumb={data.url}
        thumbStyle={photo}
      />
      </Card>
  );
    return (
      <div>
        {CardItems1}
      </div>
    );
  }
}
