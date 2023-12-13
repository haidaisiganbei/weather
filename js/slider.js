const images = [
  {
    image: '立春.webp',
    title: '立春',
    desc: '立春，为二十四节气之首。立，是“开始”之意；春，代表着温暖、生长。立春是“四立”之一，反映着冬春季节的更替，春生夏长、秋收冬藏，立春标志着万物闭藏的冬季已过去，开始进入风和日暖、万物生长的春季。'
  },
  {
    image: '雨水.webp',
    title: '雨水',
    desc: '雨水，是春季第2个节气。雨水节气的含义是降雨开始，降雨量极多以小雨或毛毛细雨为主，适宜的降水对农作物的生长很重要，它是农耕文化对于节令的反映。春天离不开雨水的滋润，春天的雨水，润物无声，让枯木得以逢春，让种子得以萌发。进入雨水节气，中国北方地区阴寒未尽，一些地方仍下雪，尚未有春天气息；南方地区大多数地方则是春意盎然，一幅早春的景象。'
  },
  {
    image: '惊蛰.webp',
    title: '惊蛰',
    desc: '惊蛰，是春季第3个节气，它反映的是自然生物受节律变化影响而出现萌发生长的现象。惊蛰的意思是天气回暖，春雷始鸣，惊醒蛰伏于地下冬眠的昆虫。时至惊蛰，阳气上升、气温回暖、春雷乍动、雨水增多，万物生机盎然。“惊蛰”标志着仲春卯月的开始。'
  },
  {
    image: '春分.webp',
    title: '春分',
    desc: '春分又称为“日中”、“日夜分”、“仲春之月”、“升分”等。春分的意义，一是指一天时间白天黑夜平分，各为12小时；二是春分正当春季（立春至立夏）三个月之中，平分了春季。'
  },
  {
    image: '清明.webp',
    title: '清明',
    desc: '清明，是气清景明的意思。它是反映自然界物候变化的节气，这个时节阳光明媚、草木萌动、气清景明、万物皆显，自然界呈现生机勃勃的景象。时至清明，在中国南方地区已气候清爽温暖、大地呈现春和景明之象；在北方地区也开始断雪，渐渐进入阳光明媚的春天。'
  },
  {
    image: '谷雨.webp',
    title: '谷雨',
    desc: '谷雨，是春季的最后一个节气。谷雨是“雨生百谷”的意思，此时降水明显增加，田中的秧苗初插、作物新种，最需要雨水的滋润，正所谓“春雨贵如油”。降雨量充足而及时，谷类作物能茁壮成长。'
  },
  {
    image: '立夏.webp',
    title: '立夏',
    desc: '立夏，是夏季的第一个节气，表示盛夏时节的正式开始。斗指东南，维为立夏，万物至此皆长大，故名立夏也。立夏，表示告别春天，是夏天的开始。标志着逐渐升温、炎暑将临，雷雨增多，是农作物进入旺季生长的一个重要节气。'
  },
  {
    image: '小满.webp',
    title: '小满',
    desc: '小满，是夏季的第二个节气。小满节气意味着进入了大幅降水的雨季，雨水开始增多，往往会出现持续大范围的强降水。小满和雨水、谷雨、小雪、大雪等一样，都是直接反映降水的节气。小满反映了降雨量大的气候特征：“小满小满，江河渐满”。另有解释是指北方麦类等夏熟作物的籽粒开始灌浆，只是小满，还未完全饱满。'
  },
  {
    image: '芒种.webp',
    title: '芒种',
    desc: '芒种，是夏季的第三个节气。芒种，“芒”指一些有芒的作物，如稻、黍、稷等；“种”，一为种子的“种”，一为播种的“种”。芒种的含义是：“有芒之谷类作物可种，过此即失效”。芒种时节气温显著升高，雨量充沛，是适宜晚稻等谷类作物耕播的节令，它是古代农耕文化对于节令的反映。'
  },
  {
    image: '夏至.webp',
    title: '夏至',
    desc: '夏至，是夏季的第四个节气，这天太阳直射地面的位置到达一年的最北端，几乎直射北回归线，此时，北半球各地的白昼时间达到全年最长。对于北回归线及其以北的地区来说，夏至日也是一年中正午太阳高度最高的一天。这天北半球得到的太阳辐射最多，比南半球多了将近一倍。'
  },
  {
    image: '小暑.webp',
    title: '小暑',
    desc: '小暑，是夏季的第五个节气，表示盛夏正式开始。暑，表示炎热的意思，小暑为小热，还不十分热。意指天气开始炎热，但还没到最热。小暑开始进入伏天，天气变化无常。中国多地自小暑起进入雷暴最多的时节。季风气候是中国气候的主要特点，夏季受来自海洋暖湿气流的影响，中国多地高温潮湿多雨。这个时节虽然阳光猛烈、高温潮湿多雨，但对于农作物来讲，雨热同期有利于成长。'
  },
  {
    image: '大暑.webp',
    title: '大暑',
    desc: '“暑”是炎热的意思，大暑，指炎热之极。大暑是一年中最热的节气，这时正值中伏前后，"湿热交蒸"在此时到达顶点。这个时节阳光猛烈、高温潮湿多雨，虽不免有湿热难熬之苦，却十分有利于农作物成长，农作物在此期间成长最快。大暑气候特征：高温酷热、雷暴频繁、台风。'
  },
  {
    image: '立秋.webp',
    title: '立秋',
    desc: '立秋，表示自此进入了秋季。它是是阳气渐收、阴气渐长，由阳盛逐渐转变为阴盛的节点。立秋也意味着降水、湿度等，处于一年中的转折点，趋于下降或减少；在自然界，万物开始从繁茂成长趋向萧索成熟。“'
  },
  {
    image: '处暑.webp',
    title: '处暑',
    desc: '处暑，即为“出暑”，是炎热离开的意思。时至处暑，太阳直射点继续南移、太阳辐射减弱，副热带高压也向南撤退，气温逐渐下降，暑气渐消。 处暑意味着酷热难熬的天气到了尾声，这期间天气虽仍热，但已是呈下降趋势。处暑在日常生活中起到的意义，就是提醒人们暑气渐渐消退，天气由炎热向凉爽过渡，要注意预防“秋燥”。'
  },
  {
    image: '白露.webp',
    title: '白露',
    desc: '白露是反映自然界寒气增长的重要节气。由于天气逐渐转凉，白昼有阳光尚热，但太阳一落山气温便很快下降，昼夜温差拉大。时至白露，夏季风逐渐为冬季风所代替，冷空气转守为攻，加上太阳直射点南移，北半球日照时间变短，光照强度减弱，地面辐射散热快，所以温度下降速度也逐渐加快。初秋残留的暑气逐渐消散，昼夜热冷交替，寒生露凝。古人以四时配五行，秋属金，金色白，以白形容秋露，故名“白露”。'
  },
  {
    image: '秋分.webp',
    title: '秋分',
    desc: '秋分，“分”即为“平分”、“半”的意思，秋分这天太阳光几乎直射地球赤道，全球各地昼夜等长。秋分过后，太阳直射点继续由赤道向南半球推移，北半球各地开始昼短夜长，即一天之内白昼开始短于黑夜；南半球相反。秋分后太阳直射的位置移至南半球，北半球得到的太阳辐射越来越少，地面散失的热量却较多，气温降低的速度明显加快。时至秋分，暑热已消，天气转凉，暑凉相分。'
  },
  {
    image: '寒露.webp',
    title: '寒露',
    desc: '寒露是一个反映气候变化特征的节气。进入寒露，时有冷空气南下，昼夜温差较大，并且秋燥明显。古人将寒露作为寒气渐生的表征。寒露以后，北方冷空气已有一定势力，中国大部分地区在冷高压控制之下，雨季结束。'
  },
  {
    image: '霜降.webp',
    title: '霜降',
    desc: '霜降节气反映的是气温骤降、昼夜温差变化大、秋燥明显的气候特征。霜降节气特点是早晚天气较冷、中午则比较热，昼夜温差大。就全国平均而言，霜降是一年之中昼夜温差最大的时节。由于“霜”是天冷、昼夜温差变化大的表现，故以“霜降”命名这个表示“气温骤降、昼夜温差大”的时节。霜降节气后，深秋景象明显，冷空气南下越来越频繁。'
  },
  {
    image: '立冬.webp',
    title: '立冬',
    desc: '立冬是季节类节气，表示自此进入了冬季。立，建始也；冬，终也，万物收藏也。立冬，意味着生气开始闭蓄，万物进入休养、收藏状态。其气候也由秋季少雨干燥渐渐向阴雨寒冻的冬季气候转变。立冬后日照时间将继续缩短，正午太阳高度继续降低。'
  },
  {
    image: '小雪.webp',
    title: '小雪',
    desc: '小雪是冬季第二个节气，气候要素包括光照、气温和降水等，小雪是反映降水与气温的节气，它是寒潮和强冷空气活动频数较高的节气。小雪节气的到来，意味着天气会越来越冷、降水量渐增。“雪”是水汽遇冷的产物，代表寒冷与降水，这时节的气候寒未深且降水未大，故用“小雪”来比喻这时节的气候特征。“小雪”是个比喻，反映的是这个节气期间寒流活跃、降水渐增，不是表示这个节气下很小量的雪。'
  },
  {
    image: '大雪.webp',
    title: '大雪',
    desc: '大雪节气是干支历子月的起始，标志着仲冬时节正式开始。大雪节气是一个气候概念，气候要素主要有光照、气温和降水等，它代表的是大雪节气期间的气候特征，即气温与降水量。大雪节气的特点是气温显著下降、降水量增多。大雪节气与小雪节气一样，都是反映气温与降水变化趋势的节气，它是古代农耕文化对于节令的反映。'
  },
  {
    image: '冬至.webp',
    title: '冬至',
    desc: '冬至是反映太阳光直射运动的节气，它是"日行南至、往北复返"的转折点，对于北半球各地来说，太阳高度自此回升，太阳光逐渐增强。从节气规律来说，立春是“阴阳”之气中阳气升发的始点，自立春起阴阳转化，阳气上升，立春标示着万物更生、新轮回开启。而冬至则是太阳回返的始点，自冬至起太阳高度回升、白昼逐日增长，冬至标示着太阳新生、太阳往返运动进入新的循环。'
  },
  {
    image: '小寒.webp',
    title: '小寒',
    desc: '小寒，是天气寒冷但还没有到极点的意思。冬至之后，冷空气频繁南下，气温持续降低，温度在一年的小寒、大寒之际降到最低。民谚：“小寒时处二三九，天寒地冻冷到抖”，这说明了小寒节气的寒冷程度。小寒时节，太阳直射点还在南半球，北半球的热量还处于散失的状态，白天吸收的热量还是少于夜晚释放的热量，因此北半球的气温还在持续降低。'
  },
  {
    image: '大寒.webp',
    title: '大寒',
    desc: '大寒同小寒一样，也是表示天气寒冷程度的节气，大寒是天气寒冷到极致的意思。根据中国长期以来的气象记录，在北方地区大寒节气是没有小寒冷的；但对于南方大部地区来说，是在大寒节气最冷。大寒以后，立春接着到来，天气渐暖。至此地球绕太阳公转了一周，完成了一个循环。'
  }
]

const container = document.querySelector('.slider');

// component
class Component {
  static name = 'component';

  constructor({ container, data, parent = null } = {}) {
    this.data = data;
    this.container = container;
    this.container.innerHTML = this.render(this.data);
  }

  registerSubComponents(...Comps) {
    const data = this.data;
    const container = this.container;
    this.children = this.children || [];
    Comps.forEach((Comp) => {
      const subContainer = document.createElement('div');
      const sub = new Comp({ container: subContainer, data, parent: this });
      container.appendChild(subContainer);
      this.children.push(sub);
    });
  }

  render(data) {
    /* abstract */
    return '';
  }
}

// plugin
class SliderController extends Component {
  static name = 'slider__control';

  constructor({ container, data, parent: slider }) {
    super({ container, data });

    const buttons = container.querySelectorAll('.slider__control-buttons, .slider__control-buttons--selected');
    container.addEventListener('mouseover', (evt) => {
      const idx = Array.from(buttons).indexOf(evt.target);
      if (idx >= 0) {
        slider.slideTo(idx);
        slider.stop();
      }
    });

    container.addEventListener('mouseout', (evt) => {
      slider.start();
    });

    slider.container.addEventListener('slide', (evt) => {
      const idx = evt.detail.index;
      const selected = container.querySelector('.slider__control-buttons--selected');
      if (selected) selected.className = 'slider__control-buttons';
      buttons[idx].className = 'slider__control-buttons--selected';
      this.showImage(idx);
    });
  }
  showImage(idx) {
    const buttons = container.querySelectorAll('.slider__control-buttons, .slider__control-buttons--selected');
    buttons.forEach((button) => {
      button.innerHTML = '';
    });
    const selected = container.querySelector('.slider__control-buttons--selected');
    if (selected) selected.className = 'slider__control-buttons';
    buttons[idx].className = 'slider__control-buttons--selected';
    const img = document.createElement('img');
    img.src = `images/banners/${images[idx].image}`;
    img.alt = images[idx].title;
    img.style.width = '40px';
    img.style.marginLeft = '-10px';
    buttons[idx].appendChild(img);
  }

  render(images) {
    return `
      <div class="slider__control">
        ${images.map((image, i) => `
            <span class="slider__control-buttons${i === 0 ? '--selected' : ''}"></span>
        `).join('')}
      </div>    
    `.trim();
  }
}

class SliderPrevious extends Component {
  constructor({ container, parent: slider }) {
    super({ container });
    const previous = container.querySelector('.slider__previous');
    previous.addEventListener('click', (evt) => {
      slider.stop();
      slider.slidePrevious();
      slider.start();
      evt.preventDefault();
    });
  }

  render() {
    return '<a class="slider__previous"></a>';
  }
}

class SliderNext extends Component {
  constructor({ container, parent: slider }) {
    super({ container });
    const previous = container.querySelector('.slider__next');
    previous.addEventListener('click', (evt) => {
      slider.stop();
      slider.slideNext();
      slider.start();
      evt.preventDefault();
    });
  }

  render() {
    return '<a class="slider__next"></a>';
  }
}

// slider
class Slider extends Component {
  static name = 'slider';

  constructor({ container, images = [], cycle = 3000 } = {}) {
    super({ container, data: images });
    this.items = Array.from(this.container.querySelectorAll('.slider__item, .slider__item--selected'));
    this.cycle = cycle;
    this.slideTo(0);
  }

  render(images) {
    const content = images.map(image => `
    <li class="slider__item"></li> 
    `.trim());
    return `<ul>${content.join('')}</ul>
    `;
  }

  getSelectedItem() {
    const selected = this.container.querySelector('.slider__item--selected');
    return selected;
  }

  getSelectedItemIndex() {
    return this.items.indexOf(this.getSelectedItem());
  }

  slideTo(idx) {
    const selected = this.getSelectedItem();
    if (selected) {
      selected.className = 'slider__item';
    }
    const item = this.items[idx];
    if (item) {
      item.className = 'slider__item--selected';
    }
    // 获取id为content的元素,在其中动态创建title和desc元素
    document.querySelector('.article >.sub-title').innerHTML = `${images[idx].title}`
    document.querySelector('.article > .content').innerHTML = `${images[idx].desc}`
    const detail = { index: idx };
    const event = new CustomEvent('slide', { bubbles: true, detail });
    this.container.dispatchEvent(event);
  }

  slideNext() {
    const currentIdx = this.getSelectedItemIndex();
    const nextIdx = (currentIdx + 1) % this.items.length;
    this.slideTo(nextIdx);
  }

  slidePrevious() {
    const currentIdx = this.getSelectedItemIndex();
    const previousIdx = (this.items.length + currentIdx - 1) % this.items.length;
    this.slideTo(previousIdx);
  }

  start() {
    this.stop();
    this._timer = setInterval(() => this.slideNext(), this.cycle);
  }

  stop() {
    clearInterval(this._timer);
  }
}

const slider = new Slider({ container, images });
slider.registerSubComponents(SliderController, SliderPrevious, SliderNext);
slider.start();