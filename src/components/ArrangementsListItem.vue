<template>
    <a class="arrangementItem" href="">
        <img
            class="arrangementThumb"
            src="https://picsum.photos/200"
            alt=""
        />

        <div class="arrangementContent">
            <div class="arrangementTitles">
                <div class="arrangementTitle">Nome da Música</div>
                <div class="arrangementsSubtitle">Alguma coisa muito foda aqui tlgdd</div>
                <div class="arrangementArtist">Artista</div>
            </div>

            <div class="arrangementMeta">
                <div class="arrangementMetaRow">
                    <div class="arrangementPill"><span>🎷</span>Sax Alto</div>
                    <div class="arrangementPill"><span>🎺</span>Trompete</div>
                    <div class="arrangementPill"><span>🎻</span>Violinos</div>
                    <div class="arrangementPill"><span>🎸</span>Guitarra</div>
                    <div class="arrangementPill"><span>🥁</span>Bateria</div>
                    <div class="arrangementPill">...</div>
                </div>

                <div class="arrangementMetaRow">
                    <div class="arrangementPill"><span>📄</span>PDF</div>
                    <div class="arrangementPill"><span>🎼</span>.mscz</div>
                    <div class="arrangementPill"><span>🎼</span>.musicxml</div>
                    <div class="arrangementPill">...</div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>

</script>

<style scoped>
.arrangementItem {
    --padding: 40px;

    display: flex;
    align-items: center;
    width: 960px;
    background-color: #8080801a;
    border-radius: 20px;
    color: #111;
    text-decoration: none;
    box-sizing: border-box;

    .arrangementThumb {
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }
    .arrangementContent {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        min-width: 0;
        padding: var(--padding);
        height: 120px;
        

        .arrangementTitles {
            /* flex: 0 1 auto; */
            /* display: flex; */
            flex-direction: column;
            text-align: left;
            gap: 4px;
            min-width: 0;
            color: var(--text);
            max-width: 60%;

            .arrangementTitle {
                font-size: 28px;
                font-weight: 700;
                line-height: 1.1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .arrangementsSubtitle {
                font-size: 18px;
                font-style: italic;
                font-weight: 200;
                
            }
            
            .arrangementArtist {
                font-size: 22px;
                color: var(--secondary);
                font-weight: 600;
            }
        }
    
        .arrangementMeta {
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: flex-end;

            .arrangementMetaRow {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: flex-end;
    
                .arrangementPill {
                    border: none;
                    background: #8080801a;
                    color: var(--text);
                    border-radius: 100px;
                    padding: 6px 12px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1;
                    cursor: pointer;
        
                    &:hover {
                        background-color: var(--secondary);
                    }
        
                    span {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}

</style>

