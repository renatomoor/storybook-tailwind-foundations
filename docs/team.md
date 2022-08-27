<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.honey.is/avatar/B4L/gjL/Eg8hgHtE864K4aF4.png?size=640',
    name: 'Renato Moor',
    title: 'Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/renatomoor' },
    ]
  },
]
</script>

# Team 

<VPTeamMembers size="medium" :members="members" />
