import {
    faCheckCircle,
    faCommentDots,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import styles from './PostHome.module.scss';
// import Tippy from '@tippyjs/react';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function PostHome() {
    const [follow, setFollow] = useState(true);
    const [play, setPlay] = useState(true);
    console.log(play);
    const handleFollow = () => {
        setFollow(!follow);
    };
    const handleRunMusic = () => alert(12);

    // setPlay(!play);
    // useEffect(() => {
    //     handleRunMusic();
    // }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile')}>
                <img
                    alt=""
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662361200&x-signature=fJE9rxQBUVsTNsGUchDpJgi906c%3D"
                />
                <div className={cx('item-info')}>
                    <div className={cx('info')}>
                        <div className={cx('info-user')}>
                            <div className={cx('user')}>
                                <h3>hoaa.hanasii</h3>
                                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                                <span>Đào Lê Phương Hoa</span>
                            </div>
                            <div className={cx('content')}>
                                <span>Các bạn nhân viên thân thiện và nhiệt tình 100 điểmmm ❤️ Thank youuu</span>
                            </div>
                            <h4 className={cx('video-source')}>
                                <a href="https://www.tiktok.com/music/nh%E1%BA%A1c-n%E1%BB%81n-hngleehoichinh-7087475608431315739?lang=en">
                                    <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                                    nhạc nền - hngleehoichinh - ig: hnglee_
                                </a>
                            </h4>
                        </div>
                        <div onClick={handleFollow}>
                            {follow ? (
                                <Button className={cx('btn-follow')} outline>
                                    Follow
                                </Button>
                            ) : (
                                <Button className={cx('btn-follow')} text>
                                    Following
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className={cx('video-uploaded')}>
                        <div className={cx('feed-video')}>
                            <div className={cx('placement')}>
                                <div className={cx('logo')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faFlag} />
                                    <span>Report</span>
                                </div>

                                <div className={cx('controls')}>
                                    <div
                                        className={cx('prev')}
                                        onClick={() => {
                                            alert(12);
                                        }}
                                    >
                                        {play ? (
                                            <button className={cx('btn-play')}>
                                                <FontAwesomeIcon icon={faPlay} />
                                            </button>
                                        ) : (
                                            <button className={cx('btn-pause')}>
                                                <FontAwesomeIcon icon={faPause} />
                                            </button>
                                        )}
                                    </div>
                                    <button className={cx('btn-volume')}>
                                        <FontAwesomeIcon icon={faVolumeHigh} />
                                    </button>
                                </div>
                                {/* <input type="range" className={cx('run-music')} /> */}
                            </div>
                            {/* <video
                                        controls
                                        autoPlay
                                        src="https://v16-webapp.tiktok.com/20ffd4133de3bbccef8e56fe7cff8989/6314415b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/6fbf4a73e9784d8088a6956ccdd856ef/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2208&bt=1104&cs=0&ds=3&ft=eXd.6Hk_Myq8ZQpc.he2N1MTrl7Gb&mime_type=video_mp4&qs=0&rc=ZmgzaThmMzVpNDU0ZDU1NUBpM2s0eTM6Zjc1ZTMzZjgzM0BjNDMzLTUzNjExLi4tLzBjYSNlL25ocjRfZS1gLS1kL2Nzcw%3D%3D&l=202209040010200102450451762295A29D&btag=80000"
                                    ></video> */}

                            <ReactPlayer
                                width="100%"
                                height="100%"
                                url="https://v16-webapp.tiktok.com/467e2f65b506262ee27a3349628dfa03/6314c6fc/video/tos/useast2a/tos-useast2a-pve-0037-aiso/375b1732dc384299a539d21b51576202/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3500&bt=1750&cs=0&ds=3&ft=eXd.6Hk_Myq8ZrfL~he2NHyQml7Gb&mime_type=video_mp4&qs=0&rc=OTU3ODg4NDVpM2c4MzpnaEBpMzl5cmg6Zjg7ZTMzZjgzM0AzL2FjYTBeNmExMDMzYTUxYSNqY15mcjRnbGNgLS1kL2Nzcw%3D%3D&l=2022090409402701024513011327C66597&btag=80000"
                            />
                        </div>
                        <div className={cx('icons')}>
                            <div className={cx('interactive')}>
                                <div data-icon="icon" className={cx('icon-tym')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <p>1.1M</p>
                            </div>
                            <div className={cx('interactive')}>
                                <div data-icon="icon" className={cx('icon-comment')}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </div>
                                <p>4570</p>
                            </div>
                            <div className={cx('interactive')}>
                                <div data-icon="icon" className={cx('icon-share')}>
                                    <FontAwesomeIcon icon={faShare} />
                                </div>
                                <p>2924</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostHome;
