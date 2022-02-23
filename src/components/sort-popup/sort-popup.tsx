import { useEffect, useState, useRef } from 'react';

type SortPopupProps = {
  onSort: (index: number) => void
  sorts: string[]
};

function SortPopup({onSort, sorts}: SortPopupProps): JSX.Element {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const sortRef = useRef(null);

  const handleOutsideClick = (event: any) => {
    if (!event.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index: number) => {
    setActiveItem(index);
    setVisiblePopup(false);
    onSort(index);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, [visiblePopup]);

  return (
    <form ref={sortRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={toggleVisiblePopup}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sorts[activeItem]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {visiblePopup && (
        <ul className="places__options places__options--custom places__options--opened">
          {sorts.map((sort: string, index: number) => (
            <li
              key={sort}
              onClick={() => onSelectItem(index)}
              className={
                activeItem === index
                  ? 'places__option places__option--active'
                  : 'places__option'
              }
              tabIndex={0}
            >
              {sort}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortPopup;
