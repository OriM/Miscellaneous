var iconDisplay_0 = 'unset';
var iconDisplay_1 = 'unset';
var iconDisplay_2 = 'unset';
var iconDisplay_3 = 'unset';
var iconDisplay_4 = 'unset';
var iconDisplay_5 = 'unset';
var iconDisplay_6 = 'unset';

var iconTitle_0 = GetValueByApiName("");
var iconTitle_1 = GetValueByApiName("");
var iconTitle_2 = GetValueByApiName("");
var iconTitle_3 = GetValueByApiName("");
var iconTitle_4 = GetValueByApiName("");
var iconTitle_5 = GetValueByApiName("");
var iconTitle_6 = GetValueByApiName("");


var html = `<style>
                .icon-list {
                    display: flex;
                    align-items: start;
                    gap: 1.75rem;
                    padding-top: 1.5rem;
                    flex-wrap: wrap;
                }
                .icon-bullet {
                    max-width: 6rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    transition: transform 0.25s ease-in-out;
                }
                .icon {
                    width: 4rem;
                    height: auto;
                    margin-bottom: 0.25rem;
                    opacity: 0.8;
                    transition: opacity 0.25s ease-in-out;
                    fill: hsl(var(--pep-color-system-primary-h), var(--pep-color-system-primary-s), var(--pep-color-system-primary-l));
                }
                .icon-bullet:hover {
                    transform: scale(1.025);
                }
                .icon:hover {
                    opacity: 1;
                }
                @media (max-width: 720px) {
                    .icon-list {
                        gap: 1.25rem;
                    }
                    .icon-bullet {
                        max-width: 5rem;
                    }
                    .icon {
                        width: 3rem;
                    }
                }
            </style>

            <div stye="icon-list">
                <span class="icon-bullet" style="display: IconDisplay_0">
                    <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <p class="body-xs color-dimmed">{{IconTitle_0}}</p>
                </span>
                <span class="icon-bullet" style="display: IconDisplay_1">
                    <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <p class="body-xs color-dimmed">{{IconTitle_1}}</p>
                </span>
                <span class="icon-bullet" style="display: IconDisplay_2">
                    <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <p class="body-xs color-dimmed">{{IconTitle_2}}</p>
                </span>
                <span class="icon-bullet" style="display: IconDisplay_3">
                    <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <p class="body-xs color-dimmed">{{IconTitle_3}}</p>
                </span>
                <span class="icon-bullet" style="display: IconDisplay_4">
                    <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <p class="body-xs color-dimmed">{{IconTitle_4}}</p>
                </span>
                <span class="icon-bullet" style="display: IconDisplay_5">
                    <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <p class="body-xs color-dimmed">{{IconTitle_5}}</p>
                </span>
                <span class="icon-bullet" style="display: IconDisplay_6">
                    <svg class="icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <p class="body-xs color-dimmed">{{IconTitle_6}}</p>
                </span>
            </div>`;


var res = html;

res = res.replace("IconDisplay_0", iconDisplay_0);
res = res.replace("IconDisplay_1", iconDisplay_1);
res = res.replace("IconDisplay_2", iconDisplay_2);
res = res.replace("IconDisplay_3", iconDisplay_3);
res = res.replace("IconDisplay_4", iconDisplay_4);
res = res.replace("IconDisplay_5", iconDisplay_5);
res = res.replace("IconDisplay_6", iconDisplay_6);

res = res.replace("IconTitle_1", iconTitle_1);
res = res.replace("IconTitle_2", iconTitle_2);
res = res.replace("IconTitle_0", iconTitle_0);
res = res.replace("IconTitle_3", iconTitle_3);
res = res.replace("IconTitle_4", iconTitle_4);
res = res.replace("IconTitle_5", iconTitle_5);
res = res.replace("IconTitle_6", iconTitle_6);

return res;