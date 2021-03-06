import React from 'react';
import Character from '../Character';
import styles from './styles.css';

const getStyles = (color, index) => {
  if (index % 3 === 0) {
    return { backgroundColor: color };
  }

  return { backgroundColor: '' };
};

class CharacterList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: this.props.characters.slice(0)
    };
  }

  removeCharacter = characterIndex => () => {
    const { characters } = this.state;

    characters.splice(characterIndex, 1);

    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;
    const { color } = this.props;

    return <div className={styles.characterList}>
      {characters.map((c, i) =>
        <Character character={c} style={getStyles(color, i)} onClick={this.removeCharacter(i)} />
      )}
    </div>
  }
}

export default CharacterList;
