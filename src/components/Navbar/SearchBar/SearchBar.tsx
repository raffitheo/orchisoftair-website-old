import React, { useState } from "react"

import SearchbarProps from "./SearchBarProps.types"

import IconExtension from "../../IconExtension/IconExtension"

import styles from "./SearchBar.module.scss"

const SearchBar: React.FC<SearchbarProps> = (componentProps: SearchbarProps) => {
  const [searchActive, setSearchActive] = useState(componentProps.openOnStart)

  return (
    <div className={styles["SearchbarWrapper"]}>
      <div className={styles["SearchbarContainer"]}>
        <form className={styles["SearchbarForm"]} action="#" method="get" role="search">
          <input
            className={`${styles["SearchbarInput"]}${searchActive ? ` ${styles["Active"]}` : ""}`}
            name="s"
            placeholder="Cerca nel sito..."
            type="search"
          />

          <button
            className={`${styles["SearchbarButton"]}${searchActive ? ` ${styles["Active"]}` : ""}`}
            type="button"
            onClick={() => {
              if (!componentProps.preventCollapse) {
                setSearchActive(!searchActive)
              }
            }}
          >
            <IconExtension
              name={"Search"}
              size={19}
              style={{
                margin: "auto"
              }}
            />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
