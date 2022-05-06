/**
 * 추상클래스: 다른 클래스가 상속받을 수만 있는 클래스
 * 하지만 새로운 인스턴스는 만들 수 없다.
 * ex) new User(...) -> 불가능!
 *
 * 추상 메소드: 추상 클래스를 상속받는 모든 것들이 구현을 해야하는 메소드
 *
 * public: 자식 클래스, 클래스 인스턴스 모두 접근 가능
 * protected: 자식 클래스에서 접근 가능
 * private: 해당 클래스 내부에서만 사용 가능
 */
{
  abstract class User {
    constructor(
      protected firstName: string,
      protected lastName: string,
      protected nickName: string
    ) {}
    abstract getNickName(): void; // 추상 메소드
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  class Player extends User {
    getNickName() {
      console.log(this.nickName);
    }
  }

  const kanguk = new Player('kanguk', 'lee', '강욱');
  kanguk.getFullName();
}

{
  type Words = {
    [key: string]: string;
  };

  class Dict {
    private words: Words;

    constructor() {
      this.words = {};
    }

    // class를 type로 설정
    add(word: Word) {
      if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }

    getDef(term: string) {
      return this.words[term];
    }

    deleteWord(term: string) {
      if (this.words[term] !== undefined) {
        delete this.words[term];
      }
    }

    updateWord(term: string, def: string) {
      if (this.words[term] !== undefined) {
        this.words[term] = def;
      }
    }
  }

  class Word {
    constructor(public term: string, public def: string) {}
  }

  const kimchi = new Word('kimchi', '한국 대표 음식');
  const ramyeon = new Word('ramyeon', '내가 제일 좋아하는 음식');

  const dict = new Dict();

  dict.add(kimchi);
  dict.add(ramyeon);
  console.log('Kimchi: ', dict.getDef('kimchi'));
  console.log('Ramyeon: ', dict.getDef('ramyeon'));

  dict.updateWord('kimchi', '한국 매운 음식');
  console.log('[UPDATE] kimchi: ', dict.getDef('kimchi'));

  dict.deleteWord('ramyeon');
  console.log('[DELETE] ramyeon: ', dict.getDef('ramyeon'));
}
