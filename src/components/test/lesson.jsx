import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Card
} from 'antd-mobile';
export default class lesson extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('课程');
  }
  render() {
    const photo = {width: "2.5rem",height: "1.5rem", marginRight: ".5rem"};
    const data1 = [
      {
        url: 'http://images.freeimages.com/images/premium/previews/3080/30803618-education-concept-head-with-keyhole-and-lesson-on-chalkboard-ba.jpg',
        title: 'BAT面试算法精品课',
        num: 12,
        people: 34991
      },
      {
        url: 'https://static01.nyt.com/images/2015/12/27/books/review/27openbook-LN2/27openbook-master675.jpg',
        title: '牛课堂算法精讲直播课',
        num: 9,
        people: 22329
      },
      {
        url: 'https://flyingbullschool.files.wordpress.com/2014/03/every-lesson-counts.png',
        title: '基础算法在面试题中的应用',
        num: 1,
        people: 14624
      },
      {
        url: 'https://dataworks-ed.com/wp-content/uploads/2014/08/A-Better-PowerPoint-Lesson.png',
        title: '牛人计划-初级项目课',
        num: 6,
        people: 210
      },
      {
        url: 'http://study.com/cimages/course-image/high-school-chemistry-syllabus-resource-lesson-plans_138512_large.jpg',
        title: '牛人计划-中级项目课',
        num: 10,
        people: 289
      },
      {
        url: 'http://wosu.org/wp-content/uploads/2015/10/columbus-neighborhoods-1.jpg',
        title: '牛人计划-高级项目课',
        num: 14,
        people: 289
      },
      {
        url: 'https://ichef.bbci.co.uk/images/ic/1200x675/p03cp7r6.jpg',
        title: '机器学习特训营',
        num: 9,
        people: 646
      },
      {
        url: 'https://i.ytimg.com/vi/1fJN8bffTW4/maxresdefault.jpg',
        title: '技术面之项目面试技术大揭秘',
        num: 1,
        people: 15505
      },
      {
        url: 'https://www.pittsfordschools.org/cms/lib/NY02205365/Centricity/Template/GlobalAssets/images///PCSD%20Logos/Color%20Two%20line%20Stacked%20Pittsford%20Schools.jpg',
        title: 'Git&Github入门',
        num: 22,
        people: 12790
      },
      {
        url: 'https://illuminations.nctm.org/uploadedImages/Content/Lessons/Highlights_Rotator/NCTMKenKen_Clear_Bkgrd_INTRO_Screen.png',
        title: 'HTML入门基础',
        num: 17,
        people: 6508
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
              共有{data.num}章
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
