# CustomSelect-angular

<p>Built-in select element is hard to style. So you can replace it with custom structure. This one provides correct behavior of ng-model property.</p>

<h3>Usage</h3>
<pre>&lt;custom-select 
        ng-model="myFruit" 
        options="fruits" 
        default="apple" 
        placeholder="Select Yammy Fruit" 
        name="fruitName"
      &gt;&lt;/custom-select&gt;
</pre>  
<p>Create fruits object in the controller. Properties <code>default</code> and <code>placeholder</code> are optional.
And you will get in your html:</p>
<div class="highlight highlight-html"><pre>
&lt;custom-select&gt;
  &lt;p&gt;
    &lt;span&gt;Яблоко&lt;/span&gt;
    &lt;span class="triangle-down"&gt;&lt;/span&gt;  // to use for an icon
  &lt;/p&gt;
  &lt;div class="options"&gt;
    &lt;ul&gt;
      &lt;li&gt;Яблоко&lt;/li&gt;
      ...
    &lt;/ul&gt;
  &lt;/div&gt;
 &lt;input type="hidden" /&gt;
&lt;/custom-select&gt;
</pre>
</div>
